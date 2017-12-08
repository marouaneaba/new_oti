QUnit.module("alertt", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='-2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='5'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var m1EUR=new money(1,"EUR");
      	var m1eur=new money(1,"eur");

        var m = MoneyOps.add(m1EUR,m1eur);

        sinon.spy(window,"alert");
        assert.ok(!window.alert.calledOnce);

}
);
QUnit.test("test add different currency", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='-2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='5'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var m1EUR=new money(1,"CHF");
      	var m1eur=new money(1,"eur");


        var m = MoneyOps.add(m1EUR,m1eur);

        sinon.spy(window,"alert");
        assert.ok(true);

}
);
/*money Ops*/
// monye null
//value <0
// value1 = 0 and value2 =0
//currencu1 != currency2

/* creation money */
//v == null ou curency == null ou value <0
//currency >3
