
public class Mammal {
	
	private int energy;
	
	public Mammal() {
		this.energy=100;
	}

	
	public int displayEnergy() {
		System.out.println("the animal energy is "+this.energy);
		return this.getEnergy();
	}
	
	
	
	
	
	
	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}
	
	
}
