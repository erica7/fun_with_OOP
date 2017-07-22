# OOP with Ruby

# Three types of methods:
#   public: can be called within the class, subclasses, and instances without restriction.
#     by default, all Ruby methods are public
#   protected: can only be called within the class and subclasses either explicitly or implicitly.
#   private: can only be called within the class and subclasses implicitly.


class Mammal
  def breath
    puts "Inhale and exhale"
  end

  def eat
    puts "Yum yum yum"
  end

  def calling_speak
    speak
  end

  def calling_cry
    cry
  end

  protected
    def speak
      puts "I am a protected method; I was called by a public method in my class"
    end

  private
    def cry
      puts "Sniff sniff..."
    end
end

class Human < Mammal # Human inherits from Mammal
  def subclass_method
    breath
  end

  def another_method
    self.eat
  end

  def explicitly_speak
    self.speak
  end

  def implicitily_speak
    speak
  end

  def explicitly_cry
    self.cry
  end

  def implicitly_cry
    cry
  end
end

person = Human.new
person.subclass_method
person.another_method

mammal = Mammal.new
# mammal.speak # => protected method `speak' called for #<Mammal:0x007fa5438183d8> (NoMethodError)
mammal.calling_speak # => I am a protected method; I was called by a public method in my class

# person.speak # => protected method `speak' called for #<Human:0x007fedfe824710> (NoMethodError)
person.explicitly_speak # => I am a protected method; I was called by a public method in my class
person.implicitily_speak # => I am a protected method; I was called by a public method in my class


mammal.calling_cry # => Sniff sniff...
# mammal.cry # => private method `cry' called for #<Mammal:0x007fd9830de5f8> (NoMethodError)

# person.cry # => private method `cry' called for #<Human:0x007f8f298de248> (NoMethodError)
# person.explicitly_cry # => `explicitly_cry': private method `cry' called for #<Human:0x007f87a30bf450> (NoMethodError)
person.implicitly_cry # => Sniff sniff...


class Project
  attr_accessor :name, :description, :owner, :tasks

  def initialize(name, description, owner)
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end

  def elevator_pitch
    "#{@name}, #{@description}"
  end

  # def tasks
  #   @tasks
  # end

  def add_tasks(new_task)
    @tasks.push(new_task)
  end

  def print_tasks
    @tasks.each { |i| puts i }
  end
end

project1 = Project.new("Project 1", "Description 1", "Owner 1")
puts project1.name # => "Project 1"
puts project1.elevator_pitch  # => "Project 1, Description 1"


# Misc:
# Ruby keyword `self` refers to whatever object called that method.
# Getters and setters are needed to manipulate the instance variables.
#   use `attr_accessor` (same as using both `attr_reader` and `attr_writer`)
# Symbols are imutable and unique. They are denoted with a colon, such as `:symbol`
# By default, a variable is local scope (exists only within its current block)
# A variable preceded by @ (e.g. `@variable`) is an instance variable (available to all methods within the class).
# Variables with @ in a rails controller are available in views.
