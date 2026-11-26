import http.server
import os
import socketserver
import urllib.parse

SITE_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = 8080

TEXT_EXTENSIONS = {
    ".html": "text/html; charset=utf-8",
    ".htm": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
}


def decode_bytes(data: bytes) -> bytes:
    if data.startswith(b"\xff\xfe"):
        return data[2:].decode("utf-16-le", errors="replace").encode("utf-8")
    if data.startswith(b"\xfe\xff"):
        return data[2:].decode("utf-16-be", errors="replace").encode("utf-8")
    if data.startswith(b"\xef\xbb\xbf"):
        return data[3:]
    try:
        data.decode("utf-8")
        return data
    except UnicodeDecodeError:
        return data.decode("cp1251", errors="replace").encode("utf-8")


class QiwiHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SITE_DIR, **kwargs)

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        if length > 0:
            self.rfile.read(length)
        self.do_GET()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        rel_path = urllib.parse.unquote(parsed.path).lstrip("/")
        if not rel_path:
            rel_path = "index.html"
        full_path = os.path.join(SITE_DIR, rel_path)
        _, ext = os.path.splitext(full_path.lower())

        if os.path.isfile(full_path) and ext in TEXT_EXTENSIONS:
            with open(full_path, "rb") as f:
                raw = f.read()
            utf8_data = decode_bytes(raw)
            if ext in (".html", ".htm") and rel_path.lower() != "index.html":
                scale_script = (
                    b'<script>(function(){function s(){'
                    b'var k=Math.min(window.innerWidth/1280,window.innerHeight/1024);'
                    b'document.documentElement.style.overflow="hidden";'
                    b'document.body.style.transformOrigin="top center";'
                    b'document.body.style.transform="scale("+k+")";'
                    b'document.body.style.width="1280px";'
                    b'document.body.style.height="1024px";'
                    b'document.body.style.margin="0 auto";'
                    b'}window.addEventListener("resize",s);window.addEventListener("DOMContentLoaded",s);s();})();</script>'
                )
                if b"</body>" in utf8_data:
                    utf8_data = utf8_data.replace(b"</body>", scale_script + b"</body>", 1)
                else:
                    utf8_data += scale_script
                if rel_path.lower() in ("enter_summ.html", "enter_summ_kaz.html"):
                    cash_panel = (
                        b'<div id="test_cash_panel" style="position:fixed;bottom:12px;right:12px;z-index:99999;'
                        b'background:rgba(0,0,0,0.8);padding:8px 12px;border-radius:8px;color:#fff;font-family:sans-serif;font-size:13px;">'
                        b'<span style="margin-right:8px;">\xd0\xa2\xd0\xb5\xd1\x81\xd1\x82 \xd0\xba\xd1\x83\xd0\xbf\xd1\x8e\xd1\x80\xd1\x8b:</span>'
                        b'<button onclick="addTestCash(100)" style="margin:2px;padding:4px 8px;cursor:pointer;">+100</button>'
                        b'<button onclick="addTestCash(200)" style="margin:2px;padding:4px 8px;cursor:pointer;">+200</button>'
                        b'<button onclick="addTestCash(500)" style="margin:2px;padding:4px 8px;cursor:pointer;">+500</button>'
                        b'<button onclick="addTestCash(1000)" style="margin:2px;padding:4px 8px;cursor:pointer;">+1000</button>'
                        b'<button onclick="addTestCash(5000)" style="margin:2px;padding:4px 8px;cursor:pointer;">+5000</button>'
                        b'</div>'
                        b'<script>function addTestCash(n){var e=document.getElementById("really_summ");'
                        b'if(e){e.value=(parseFloat(e.value)||0)+n;}}</script>'
                    )
                    if b"</body>" in utf8_data:
                        utf8_data = utf8_data.replace(b"</body>", cash_panel + b"</body>", 1)
                    else:
                        utf8_data += cash_panel
            self.send_response(200)
            self.send_header("Content-Type", TEXT_EXTENSIONS[ext])
            self.send_header("Content-Length", str(len(utf8_data)))
            self.end_headers()
            self.wfile.write(utf8_data)
            return

        super().do_GET()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), QiwiHandler) as httpd:
        print(f"Serving {SITE_DIR} at http://localhost:{PORT}/index.html")
        httpd.serve_forever()
