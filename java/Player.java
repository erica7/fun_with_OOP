import java.util.ArrayList;

public class Player {
  private String name;
  private ArrayList<Card> hand = new ArrayList<Card>();

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public Player(String name){
    this.name = name;
  }

  public Player draw(Deck deck){
    hand.add(deck.deal());
    return this;
  }
  public void discard(int i){
    if (hand.get(i) != null){
      hand.remove(i);
    }
  }
  public void discardAll(){
    hand.clear();
  }
  public void showHand(){
    for (Card card : hand) {
      System.out.println(card.getFace());
    }
  }
}
