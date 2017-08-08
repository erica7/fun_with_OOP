// OOP with C#
// note: `dotnet restore` command in directory containing 'csharp_objects.cs' and 'csharp_objects.csproj'. `dotnet run` command.

using System;
using System.Collections.Generic;

namespace cards
{
    public class Card
    {
        public string[] stringVal = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};  // the string value of the card associated with the numeric value
        public string suit;  // the suit of the card
        public int val;  // the number value of the card, e.g. 1 through 13
        public string faceVal;  // the full face value, e.g. "Ace of Spades"
        public Card(string csuit, int cval)  // constructor function
        {
            suit = csuit;
            val = cval;
            faceVal = stringVal[cval] + " of " + suit;
        }
    }

    public class Deck
    {
        public List<Card> cards = new List<Card>();
        public Deck()  // constructor function
        {
            Reset();
        }
        public Deck Reset()
        {
            // reset card property to contain the original 52 cards
            string[] suits = {"Hearts","Diamonds","Spades","Clubs"};
            foreach (string item in suits) {
                for (int i = 0; i < 13; i++)
                {
                    cards.Add(new Card(item, i));
                }
            }
            return this;
        }
        public Card Deal()
        {
            // deal top-most card
            // remove that card from list of cards
            // return the Card;
            if (cards.Count > 0)
            {
                Card topCard = cards[0];
                cards.RemoveAt(0);
                return topCard;
            }
            return null;
        }
        public Deck Shuffle()
        {
            // randomly reorder the deck's cards
            Random rand = new Random();
            for (int i = 0; i < cards.Count; i++)
            {
                int randI = rand.Next(i);
                Card temp = cards[randI];
                cards[randI] = cards[i];
                cards[i] = temp;
            }
            return this;
        }
    }

    public class Player {
        public string name;
        public List<Card> hand;

        public Player(string cname)  // constructor function
        {
            name = cname;
            hand = new List<Card>();
        }

        public Player Draw(Deck currentDeck)
        {
            // draw a card from the deck
            // add it to the player's hand
            // return the Card
            hand.Add(currentDeck.Deal());
            return this;
        }

        public object Discard(int index)
        {
            // discards the Card at the specified index from the player's hand
            // returns the Card or null if the index doesn't exist
            Card temp = hand[index];
            hand.RemoveAt(index);
            return temp;
        }

        public void PrintHand()
        {
            Console.WriteLine(this.name + "'s hand:");
            int count = this.hand.Count;
            for (int i = 0; i < count; i++)
            {
                Console.WriteLine(this.hand[i].faceVal);
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            // Let's build a deck
            Deck myDeck = new Deck();
            Console.WriteLine(myDeck);
            myDeck.Shuffle();
            // And make a player
            Player erica = new Player("Erica");
            Console.WriteLine(erica);
            Console.WriteLine(erica.name);
            // Let's add to the player's deck, discard from it, and view the deck
            erica.Draw(myDeck).Draw(myDeck).Draw(myDeck).Draw(myDeck).Draw(myDeck);
            erica.PrintHand();
            erica.Discard(0);
            erica.PrintHand();
        }
    }
}
