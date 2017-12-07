	var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){

	if(m1 === null && m2 === null){
		throw new ErrorValue();
	}else if(m1.getValue()<=0 ||m2.getValue()<=0)
		throw new moneyInforEqualZero();
	else if(m1 === null || m2 === null)
		throw new MoneyNullValueOrNullCurrency();
	else if(m1.getCurrency() !== m2.getCurrency())
		throw new DevisesIncompatibleExc(m1,m2);
	else
		return new money(m1.getValue()+m2.getValue(),m1.getCurrency());


	/*
		}else if( v === null || curr=== null || v < 0 ){
			throw new MoneyNullValueOrNullCurrency();
		}else if(curr !== undefined && curr.length > 3){
			throw new CurrencySupTrois();
		}
	*/
}

MoneyOps.sus = function(m1,m2){

	if(m1 === null && m2 === null){
		throw new ErrorValue();
	}else if(m1.getValue() < m2.getValue())
		throw new ErrorValue();
	else if(m1.getValue()<=0 ||m2.getValue()<=0)
		throw new moneyInforEqualZero();
	else if(m1 === null && m2 === null)
		throw new MoneyNullValueOrNullCurrency();
	else if(m1.getCurrency() !== m2.getCurrency())
		throw new DevisesIncompatibleExc(m1,m2);
	else
		return new money(m1.getValue()-m2.getValue(),m1.getCurrency());


}
