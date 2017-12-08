package  fr.ulille1.fil.odeva;



public class Money {
	private int value;
	private String currency;
	

	public Money(int value, String currency) 
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

    public String toString() {
     	return this.getValue()+" ("+this.getCurrency()+")";
    }

	

	@Override
	public boolean equals(Object o) {
		return _equals(o);
	}
	
	public boolean _equals(Object o)throws NullPointerException{
	    	
	    	if(((Money)o).getValue() == this.getValue() && ((Money)o).getCurrency().equals(this.getCurrency()))
	    		return true;
	    	return false;
	}
	    
	 
    
   

}
