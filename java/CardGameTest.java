public class CardGameTest {
  public static void main (String[] args) {
    Player erica = new Player("Erica");
    Deck aDeck = new Deck();
    aDeck.shuffle();
    // aDeck.showDeck();
    aDeck.showCount();
    erica.showHand();
    erica.draw(aDeck).draw(aDeck).draw(aDeck).draw(aDeck).draw(aDeck);
    erica.showHand();
    aDeck.showCount();
    erica.discard(1);
    erica.showHand();
    aDeck.showCount();
    aDeck.reset();
    aDeck.showCount();
    erica.showHand();
    erica.discardAll();
    System.out.println("discarded all... here's the new hand:");
    erica.showHand();
  }
}
