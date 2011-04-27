(function() {
	var doU = require('../doU.js'),
		data = { f1: 1, f2: 2, f3: 3},
		snippet = '<h1>Just static text</h1> <p>Here is a simple case <?=it.f1+it.f3?> </p> <div class="<?=it.f1?>"> Next we will use a JavaScript block: </div> <? for(var i=0; i < it.f2; i++) { ?>	<div><?=it.f3?></div> <? }; ?>';

	doU.templateSettings = {
		begin : '<?',
		end : '?>',
		varname : 'it'
	};


	var doUCompiled = doU.template(snippet);

	console.log("Generated function: \n" + doUCompiled.toString());
	console.log("Result of calling with " + JSON.stringify(data) + " :\n" + doUCompiled(data));
}());
