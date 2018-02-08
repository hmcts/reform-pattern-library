## Example

```example

{% block content %}
<div class="tabs" data-js="tabs">
    
	{% call reformTabs.list() %}
    {{ reformTabs.selectedItem("Before you start", panelId="before-you-start") }}
    {{ reformTabs.item("Need to know", panelId="need-to-know") }}
    {{ reformTabs.item("Ways to apply", panelId="ways-to-apply") }}
  {% endcall %}
	
  {% call reformTabs.content() %}
    
	  {%- call reformTabs.panel(id="before-you-start") -%}
		
	    <h2 class="heading-medium">Before you start</h2>
			<p>To get your first provisional driving licence online for a car, motorcycle or moped you must:</p>
	    <ul class="list list-bullet">
	      <li>be a resident of Great Britain &ndash; there&rsquo;s a different service in <a href="">Northern Ireland</a></li>
	      <li>meet the minimum age requirement</li>
	      <li>meet the <a href="">minimum eyesight requirement</a></li>
	      <li>not be prevented from driving for any reason</li>
	      <li>pay &pound;50 by MasterCard, Visa, Electron, Maestro or Delta debit or credit card</li>
	      <li>have a valid <abbr title="United Kngdom">UK</abbr> passport or <a href="">other form of identity</a></li>
	      <li>have your National Insurance number if known</li>
	      <li>provide addresses where you&rsquo;ve lived for the last 3 years</li>
	    </ul>
		
    {%- endcall -%}
  
	  {%- call reformTabs.panel(id="need-to-know") -%}
		
	    <h2 class="heading-medium">Need to know</h2>
			<ul class="list list-bullet">
	      <li>proof of identification required</li>
	      <li>3 years of address details required</li>
	      <li>debit or credit card required</li>
	    </ul>
		
    {%- endcall -%}

    {%- call reformTabs.panel(id="ways-to-apply") -%}
			
			<h2 class="heading-medium">Ways to apply</h2>
			<p>You can apply by post by completing a D1 application form, which you can get from the <a href=""><abbr title="Driver and Vehicle Licensing Agency">DVLA</abbr> form ordering service</a> or from a Post Office.</p>
	    <p>You&rsquo;ll also need to include:</p>
	    <ul class="list list-bullet">
	      <li>original documentation confirming your identity</li>
	      <li>a colour <a href="">passport&ndash;style photograph</a></li>
	      <li>the fee of &pound;50 by cheque or postal order payable to <abbr title="Driver and Vehicle Licensing Agency">DVLA</abbr> (do not send cash)</li>
	    </ul>
	    <p>Send your completed application and payment to <abbr title="Driver and Vehicle Licensing Agency">DVLA</abbr>, Swansea, SA99 1AD.</p>
	    <p>If you&rsquo;re including non&ndash;<abbr title="United Kingdom">UK</abbr> identity documents send your application and payment to <abbr title="Driver and Vehicle Licensing Agency">DVLA</abbr>, Swansea, SA99 1AF.</p>
			
    {%- endcall -%}
			
  {% endcall %}
		
</div>
{% endblock %}

```

## When to use this pattern

Use this pattern for all XYZ.

## Research for this pattern

Maybe a link to some research here with a brief explanation of why we’re making this a pattern.
