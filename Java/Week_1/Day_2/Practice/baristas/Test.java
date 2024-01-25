public class Test{

    public static void main(String[] args){

        Item item1=new Item("Coffee",1.6);
        Item item2=new Item("Latte",2.3);
        Item item3=new Item("Water",2.2);
        Item item4=new Item("Soda",3.5);
        Item item5=new Item("Juice",4.5);



        Order order1 = new Order();
        Order order2 = new Order();
        Order order3= new Order("Alaa");
        Order order4= new Order("Khairy");
        Order order5= new Order("Anis");


        order1.addItem(item1);
        order1.addItem(item3);
        order2.addItem(item2);
        order2.addItem(item4);
        order3.addItem(item3);
        order3.addItem(item5);
        order4.addItem(item4);
        order4.addItem(item2);
        order5.addItem(item5);
        order5.addItem(item1);

        order2.setReady(true);
        order4.setReady(false);

        System.out.printf(order2.getName()+" your order is "+order2.getStatusMessage());
        System.out.printf(order4.getName()+" your order is "+order4.getStatusMessage());
        System.out.printf(order3.getName()+" your order is "+order4.getStatusMessage());
        System.out.printf(order5.getName()+" your order is "+order4.getStatusMessage());
        System.out.printf(order1.getName()+" your order is "+order4.getStatusMessage());
        System.out.printf(order1.getName()+" the total is "+order1.getOrderTotal());

        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();









    }
}