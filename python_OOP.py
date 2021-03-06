# OOP with Python

import random

# Create a class with keyword `class`.
# __init__() method is a 'magic method' that is automatically created and invoked when a new instance is created.
# self refers to a specific instance.
# "return self" returns its own instance; this allows methods to be chained.


###### ###### ###### CARDS ###### ###### ######

class Card(object):
    def __init__(self, suit, value):
        stringVal = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        self.suit = suit;
        self.value = value;
        self.faceValue = stringVal[value] + " of " + self.suit;

class Deck(object):
    def __init__(self):
        self.cards = []
        self.reset()
    def reset(self):
        suits = ["Hearts","Diamonds","Spades","Clubs"]
        for suit in suits:
            for i in range(0, 13):
                self.cards.append(Card(suit, i))
        return self
    def deal(self):
        if len(self.cards) > 0:
            top_card = self.cards[0]
            self.cards.pop(0)
            return top_card
        return null
    def shuffle(self):
        for card in self.cards:
            rand_i = random.randint(0, len(self.cards)-1)
            temp = self.cards[rand_i]
            self.cards[rand_i] = card
            card = temp
        return self

class Player(object):
    def __init__(self, name = "Anonymous Player"):
        self.name = name
        self.hand = []
    def draw(self, deck):
        self.hand.append(deck.deal())
        return self
    def discard(self, i):
        if i < len(self.hand):
            temp = self.hand[i]
            self.hand.pop(i)
        return self
    def print_hand(self):
        print self.name + "'s hand:"
        for each in self.hand:
            print each.faceValue

my_deck = Deck()
my_deck.shuffle()
erica = Player("Erica")
print erica.name
erica.print_hand()
erica.draw(my_deck).draw(my_deck).draw(my_deck)
erica.print_hand()
erica.discard(10).discard(2)
erica.print_hand()

###### ###### ###### CARDS ###### ###### ######


class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    def display_all(self):
        print "Price:", self.price
        print "Speed:", self.speed
        print "Fuel:", self.fuel
        print "Mileage:", self.mileage
        print "Tax:", self.tax

new_car = Car(25000, "60mph", "Full", "30mpg")
used_car = Car(5000, "120mph", "Empty", "20mpg")

class Bike(object):
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print self.price, self.max_speed, self.miles
    def ride(self):
        print "riding"
        self.miles = self.miles + 10
        return self
    def reverse(self):
        print "reversing"
        if self.miles - 5 < 0:
            self.miles = 0
        else:
            self.miles = self.miles - 5
        return self

bike1 = Bike(200, "25mph")
bike2 = Bike(150, "20mph")
bike3 = Bike(1000, "75mph")

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()

class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name:", self.name
        print "Health:", self.health

animal = Animal('animal')
animal.walk().walk().walk().run().run().displayHealth()

# Another class called Dog inherits everything from Animal with a different default health and a new method pet().

class Dog(Animal):
    def __init__(self, name, health=150):
        super(Dog, self).__init__(name, health)
        # self.health = 150
    def pet(self):
        self.health += 5
        return self

dog = Dog('dog')
dog.walk().walk().walk().run().run().pet().displayHealth()

# Another class called Dragon inherits everything from Animal with a different default health, and a new method fly(), and a modified displayHealth() method.

class Dragon(Animal):
    def __init__(self, name, health=170):
        super(Dragon, self).__init__(name, health)
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon."
        super(Dragon, self).displayHealth()

dragon = Dragon('dragon')
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()

# Instances of animal do not inherit methods from child objects (e.g. pet() method from Dog class, or fly() method from Dragon class)
#
# animal.fly().displayHealth() ---does not work:
# AttributeError: 'Animal' object has no attribute 'fly'
#
# animal.pet().displayHealth() ---does not work:
# AttributeError: 'Animal' object has no attribute 'pet'

# Instances of sibling classes do not inherit sibling methods
#
# (e.g. Dragon instances do not inherit pet() method from Dog class)
# dragon.pet()
# AttributeError: 'Dragon' object has no attribute 'pet'
#
# (e.g. Dog instances do not inherit fly() method from Dragon class)
# dog.fly()
# AttributeError: 'Dog' object has no attribute 'fly'
