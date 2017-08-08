public class Card {
  private String suit;
  private int value;
  private String face;
  static String[] faceStrings = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

  public String getSuit() {
    return suit;
  }
  public void setSuit(String suit) {
    this.suit = suit;
  }
  public int getValue() {
    return value;
  }
  public void setValue(int value) {
    this.value = value;
  }
  public String getFace() {
    return face;
  }
  public void setFace(String face) {
    this.face = face;
  }

  public Card(String suit, int value) {
    this.suit = suit;
    this.value = value;
    this.face = faceStrings[value] + " of " + suit;
  }
}
