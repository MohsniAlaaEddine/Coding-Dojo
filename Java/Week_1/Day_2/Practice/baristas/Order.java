import java.util.ArrayList;
class Order {

    // MEMBER VARIABLES 
    private String name;
    private boolean ready;
    private ArrayList<Item> items ;
    

    public Order(){
        this.name="Guest";
        this.ready=ready;
        this.items=new ArrayList<Item>();
    }

    public Order(String name){
        this.name=name;
        this.ready=ready;
        this.items=new ArrayList<Item>();
    }

    // METHODS

    public void addItem(Item newItem){
        this.items.add(newItem);
    }


    public String getStatusMessage(){
        if(this.ready){
            return "Your order is ready.";
        }else{
            return  "Thank you for waiting. Your order will be ready soon.";
        }
    }

    public double getOrderTotal(){
        double totlal =0;
        for (int i=0;i<items.size();i++){
            totlal+=items.get(i).getPrice();
        }
        return totlal;
    }


    public void display(){
        System.out.printf("Customer Name: %s",this.name);
        for(int i=0;i<items.size();i++){
            System.out.printf(this.items.get(i).getName()+"-  $"+this.items.get(i).getPrice());
        }
        System.out.printf("Total:  $",getOrderTotal());
    }


    // GETTERS & SETTERS

    public String getName(){
        return this.name;
    }
    public void setName(String newValue){
        this.name=newValue;
    }
    public boolean getReady(){
        return this.ready;
    }
    public void setReady(boolean newValue){
        this.ready=newValue;
    }

}