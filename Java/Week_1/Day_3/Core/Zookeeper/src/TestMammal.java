
public class TestMammal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		Gorilla gorilla1 = new Gorilla();
		
		gorilla1.throwSomething();
		gorilla1.throwSomething();
		gorilla1.throwSomething();
		
		gorilla1.eatBananas();
		gorilla1.eatBananas();
		
		gorilla1.climb();
		
		System.out.println(gorilla1.displayEnergy());
		
		
		Bat dracula=new Bat();
		
		dracula.attackTown();
		dracula.attackTown();
		dracula.attackTown();
		
		dracula.eatHumans();
		dracula.eatHumans();
		
		dracula.fly();
		dracula.fly();
		
		System.out.println(dracula.displayEnergy());
	}

}
