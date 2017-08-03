<?php
// OOP with PHP
// `__construct()` method is run when an object is instantiated; arguments passed to the class (`new Class(args)`) are passed to the constructor function
// `$this` refers to the current object instance
// `__get()` and `__set()` magic methods can be used instead of implementing individual getts and setters for each property

////// ////// ////// CARDS ////// ////// //////

class Card
{
  public $stringVal = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  public $suit;
  public $value;
  public $faceValue;
  public function __construct($csuit, $cvalue)
  {
    $this->suit = $csuit;
    $this->value = $cvalue;
    $this->faceValue = $this->stringVal[$cvalue]." of ".$csuit;  // use `.` for string concatenation
  }
  public function __get($property)
  {
    if (property_exists($this, $property))
    {
      return $this->property;
    }
  }
  public function __set($property, $value)
  {
    if (property_exists($this, $property))
    {
      $this->property = $value;
    }
    return $this;
  }
}

class Deck
{
  public $suits = ["Hearts","Diamonds","Spades","Clubs"];
  public $cards = array();
  public function __construct()
  {
    // $this->cards = array();
    $this->reset();
  }
  public function __get($property)
  {
    if (property_exists($this, $property))
    {
      return $this->property;
    }
  }
  public function __set($property, $value)
  {
    if (property_exists($this, $property))
    {
      $this->property = $value;
    }
    return $this;
  }
  public function reset()
  {
    foreach($this->suits as $suit)
    {
      for ($j=0; $j < 13; $j++)
      {
        array_push($this->cards, new Card($suit, $j));
      }
    }
  }
  public function deal()
  {
    if(count($this->cards) > 0)
    {
      return array_shift($this->cards);
    }
  }
  public function shuffle()
  {
    $len = count($this->cards);
    foreach($this->cards as $card)
    {
      $randInt = rand(0,$len-1);
      $temp = $this->cards[$randInt];
      $this->cards[$randInt] = $card;
      $card = $randInt;
    }
  }
}

class Player
{
  public $name;
  public $hand = array();
  public function __construct($name)
  {
    $this->name = $name;
    // $this->hand = array();
  }
  public function __get($property)
  {
    if (property_exists($this, $property))
    {
      return $this->property;
    }
  }
  public function __set($property, $value)
  {
    if (property_exists($this, $property))
    {
      $this->property = $value;
    }
    return $this;
  }
  public function draw($deck)
  {
    array_push($this->hand, $deck->deal());
    return $this;
  }
  public function discard($index)
  {
    array_splice($this->hand, $index, 1);
    return $this;
  }
}

$my_deck = new Deck();
$my_deck->shuffle();
$dealt_card = $my_deck->deal();
echo $dealt_card->faceValue;
echo "<br>";
$erica = new Player("Erica");
$erica->draw($my_deck)->draw($my_deck)->draw($my_deck)->draw($my_deck)->draw($my_deck);
echo "Cards in hand: ".count($erica->hand);
echo "<br>";
$erica->discard(1)->discard(1);
echo "Cards in hand: ".count($erica->hand);
// var_dump($erica->hand);
echo "<br><br><br>";

////// ////// ////// CARDS ////// ////// //////


class Mammal
{
  public $health = 100;
  public $name;
  public function __construct($name)
  {
    $this->name = $name;
    echo $name." has been instantiated!";
  }
  public function __get($property)
  {
    if (property_exists($this, $property))
    {
      return $this->property;
    }
  }
  public function __set($property, $value)
  {
    if (property_exists($this, $property))
    {
      $this->property = $value;
    }
    return $this;
  }
  public function make_noise()
  {
    echo "Noise!";
  }
  public function hurt()
  {
    $this->health -= 5;
    return $this;  // return `$this` to chain methods
  }
  public function heal()
  {
    if($this->health <= 95)
    {
      $this->health += 5;
    }
    else
    {
      $this->health = 100;
    }
    return $this;
  }
}

class Human extends Mammal
{
  public function make_noise()  // overwrite parent method
  {
    echo "Hello!";
  }
}

class Dog extends Mammal
{
  public function make_noise()  // overwrite parent method
  {
    echo "Woof!";
  }
}

$thomas = new Human("Thomas");
var_dump($thomas);
$sparky = new Dog("Sparky");
var_dump($sparky);
echo "<br>";
echo $thomas->name;
echo "<br>";
$thomas->make_noise();
echo "<br>";
echo $thomas->name." - ".$thomas->health;
echo "<br>";
echo $sparky->name." - ".$sparky->health;
echo "<br>";
$thomas->hurt()->hurt()->heal();
echo $thomas->name." - ".$thomas->health;
echo "<br>";
echo $sparky->name." - ".$sparky->health;
echo "<br>";
$sparky->make_noise();
echo "<br>";
echo $sparky->name." - ".$sparky->health;
?>
