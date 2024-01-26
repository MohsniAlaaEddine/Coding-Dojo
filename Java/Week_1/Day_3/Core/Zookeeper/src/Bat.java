
public class Bat extends Mammal{

	public Bat() {
		super();
		this.setEnergy(getEnergy()+200);
	}
	
	public void fly() {
		this.setEnergy(getEnergy()-50);
		System.out.println(" the bat is airborne \n");
	}
	
	public void eatHumans() {
		this.setEnergy(getEnergy()+25);
		System.out.println(" the bat ated a person \n");
	}
	
	public void attackTown() {
		this.setEnergy(getEnergy()-100);
		System.out.println(" the bat attacked the town \n");
	}
	
}
