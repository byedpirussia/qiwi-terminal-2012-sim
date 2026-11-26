var phoneParser = function() {
	this.index = window.phonesIndex = {};
	this.number = '';
	this.recursions = 0;
	
	this.get = function(number, callback)
	{
		if(number) this.number = this.spliceNumber(number);
		if(callback) this.callback = callback;

		if(this.index[this.number.prefix])
		{
			this.test();
		}
		else
		{
			getScript('./phones/gsm/' + this.number.str.prefix + '.js', this.test, null, this, function(){
				this.callback();
			});
		}
	};
	
	this.test = function()
	{
	    storage.put("fake", null);
	    if (!this.index[this.number.prefix]) return this.callback();
		this.recursions++;
		
	//console.debug('++ ', JSON.stringify(this.number));
		var result = this.findNearest(this.index, this.number.prefix)[1];
		
		if($isNoU(this.number.pre) && $isNoU(this.number.number)) return;
	
	//console.debug('?? ', result);
		var findResult = this.findNearest(result, this.number.pre);
		
		result = findResult[1];
		
		if($isNoU(result) || this.recursions > 8)
		{
			return this.callback();
		}
	//console.debug('!! ', result);
	
		var i = false;
		/*for(var range in result)
		{
			if(+range != range) continue;
			console.debug('-- ', range, +range == range);
			if(i === false || ( Math.abs(range - this.number.number) < Math.abs(i - this.number.number) )) i = range;
			console.debug(range, this.number.number, Math.abs(i - this.number.number));
		}*/
		
		for(var range in result)
		{
			var arr = result[range];
			if(arr._typeName == 'Array')
			{
				for(var j = 0, l = arr.length; j < l; j++)
				{
					//console.debug('-> ', arr[j]);
					if(arr[j][0] <= this.number.real && this.number.real <= arr[j][1]) 
					{
						i = arr[j];
					}
				}
			}
		}

		result = i;
		
		if($isNoU(i) || i === false)
		{
			result = new Array(0000000000,0000000000,storage.get("provider"), 1, 1);
			storage.put("fake", "true");
		}

			window.UIProvider = null;

			getScript('./config/'+ storage.get("language") + "/" + result[2] + '.js', function(result){
			    if (UIProvider)
				    result.provider = UIProvider;
				else
				    result.provider = "false";
				this.callback(result);
			}, [{
				number: this.number,
				from: result[0],
				to: result[1],
				rid: result[4],
				region: regions[result[3]],
				provider: result[2]
			}], this, function(result){
				result.provider = "false";
				this.callback(result);
			});
			return;
		
		this.callback();
	};

	this.findNearest = function(arr, i)
	{
		//console.debug('need: ', i, 'in: ', arr);
		var result,
		    i = i;
		if(arr)
		{
			//console.debug('---');
			do
			{
			
				i = i.toString();
			//	console.debug(this.nulls(i, 3) + i);
				result = arr[this.nulls(i, 3) + i];
				i--;
			}
			while(!result && arr && i > -1);
			//console.debug('---');
		}
		//console.debug('fidned: ', result);
		return [i, result];
	};

	this.spliceNumber = function(number)
	{
		return {
			prefix: +number.substr(0, 3),
			pre: +number.substr(3, 3),
			number: +number.substr(6, 4),
			str: {
				prefix: number.substr(0, 3),
				pre: number.substr(3, 3),
				number1: number.substr(6, 2),
				number2: number.substr(8, 2)
			},
			real: number
		};
	};
	
	this.nulls = function(s, m, g)
	{
		return (new Array((m + 1 - s.toString().length)) ).join(g || '0')
	};
};

var regions = [];
regions[1]='Республика Казахстан';
regions[2]='Алматы и Алматинская область';
regions[3]='Атырау и Атырауская область';
regions[4]='Актобе и Актюбинская область';
regions[5]='Шымкент и Шымкентская область';
regions[6]='Кызылорда и Кызылординская область';
regions[7]='Астана и Акмолинская область';
regions[8]='Павлодар и Павлодарская область';
regions[9]='Караганда и Карагандинская область';
regions[10]='Тараз и Жамбылская область';


