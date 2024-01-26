
public class Gorilla extends Mammal {

	public Gorilla() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void throwSomething() {
		this.setEnergy(getEnergy()-5);
		System.out.println("The gorilla has thrown something \n");
	}
	
	public void eatBananas() {
		this.setEnergy(getEnergy()+10);
		System.out.println("The gorilla has eated a banana \n");
	}
	
	public void climb() {
		this.setEnergy(getEnergy()-10);
		System.out.println("The gorilla has climbed a tree \n");
	}
}
