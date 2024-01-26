
public class Phone extends Device {

	public Phone() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void MakeCall() {
		this.setBattery(getBattery()-5);
		System.out.printf("you made a call and your battery now is %d \n",this.getBattery());
	}
	public void PlayGame() {
		if(this.getBattery()>25) {			
		this.setBattery(getBattery()-20);
		System.out.printf("you played a game and your battery now is %d \n",this.getBattery());
		}else {
			System.out.println("You cannot play game, your battery is under 25%");
		}
	}
	public void Charge() {
		this.setBattery(getBattery()+50);
		System.out.printf("you charged your PHONE and your battery now is %d \n",this.getBattery());;
	}
	

}
  