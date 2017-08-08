import java.util.ArrayList;
import java.util.Random;

public class Deck {
  private ArrayList<Card> cards = new ArrayList<Card>();

  // public ArrayList<Cards> getCards(){
  //   return cards;
  // }
  public Deck(){
    reset();
  }
  public void reset(){
    String[] suits = {"Hearts","Diamonds","Spades","Clubs"};
    cards.clear();
    for (String suit : suits) {
      for (int i = 0; i < 13; i++) {
        cards.add(new Card(suit, i));
      }
    }
  }
  public void shuffle(){
    Random rand = new Random();
    int len = cards.size();
    for (int i = 0; i < len; i++) {
      int randIndex = rand.nextInt(len);
      Card temp = cards.get(i);
      cards.set(i, cards.get(randIndex));
      cards.set(randIndex, temp);
    }
  }
  public Card deal(){
    return cards.remove(0);
  }
  public void showDeck(){
    for(Card card : cards){
      System.out.println(card.getFace());
    }
  }
  public void showCount(){
    System.out.println(cards.size());
  }
}
