package  fr.ulille1.fil.odeva;

import java.util.*;

public class Money {
	private int value;
	private String currency;


	Money(int value, String currency)
	{
		if(value <0)
				throw new InferieurZeroException();
		else
			this.value=value;
		this.currency=currency;
	}

	public int getValue()
	{
		return this.value;
	}

	public String getCurrency()
	{
		return this.currency;
	}
		@Override
    public String toString() {
     	return this.getValue()+" ("+this.getCurrency()+")";
    }
		@Override
    public boolean _equals(Object o){
    	return equals((Money)o);
    }
		@Override
    public boolean equals(Money m){
			if(m != null && m.getValue() == this.getValue() && m.getCurrency().equals(this.getCurrency()))
    		return true;
    	return false;
    }

}
