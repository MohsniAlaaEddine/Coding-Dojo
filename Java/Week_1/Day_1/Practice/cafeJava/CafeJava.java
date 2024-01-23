public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 5.5;
        int latte=2;
        double cappicino=3.3;

    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // // Example:
        // System.out.println(customer1+pendingMessage ); 
        // System.out.println(isReadyOrder4 ==false?customer4+pendingMessage :customer4+readyMessage);
        // System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
        System.out.println("the total is "+latte*2); 
        System.out.println(isReadyOrder2 ==false?customer2+pendingMessage :customer2+readyMessage);
        System.out.println("the total is "+latte); 

    	// ** Your customer interaction print statements will go here ** //
    }
}
