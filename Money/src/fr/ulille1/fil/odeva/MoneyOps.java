/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package fr.ulille1.fil.odeva;

/**
 *
 * @author marius
 */
public class MoneyOps {
  private static MoneyFactory mf = MoneyFactory.getDefaultFactory();

  /**
   * Add moneys having the same currency
  */
  private MoneyFactory(){}

  public static void setMoneyFactory(MoneyFactory injectedMF){
	  mf = injectedMF;
  }
  public static Money simpleAdd(Money m1, Money m2) throws UnexistingCurrencyException
  {
	  if(m1.getCurrency()!=m2.getCurrency()){
		  throw new IncompatibleCurrencyException(m1.getCurrency(), m2.getCurrency());
	  }
    return mf.createMoney(m1.getValue()+m2.getValue(),m1.getCurrency());

  }
}
