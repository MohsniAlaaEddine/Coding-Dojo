import java.util.ArrayList;
public class CafeUtil{

    public int getStreakGoal(){
        int sum=0;
        for(int i=1;i<=10;i++){
                sum=sum+i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        double total=0;
            for (int i=0;i<prices.length;i++){
            total=total + prices[i];
            }
            return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        
        for(int i=0;i<menuItems.size();i++){
            String item= menuItems.get(i);
            System.out.println(item);
        }
    }

    public void addCustomer(ArrayList<String> customers){

        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.printf("Hello, %s ! \n",username);
        System.out.printf("There are %s people in front of you \n",customers.size());
        customers.add(username);
        System.out.println(customers);
    }
        

}