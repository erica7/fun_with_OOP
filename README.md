# fun_with_OOP

## Object-Oriented Programming

A **Class** is a **data type definition** composed of members:
+ Data members (fields / attributes)
+ Function members (methods)

An **Object** or **Instance** of a Class is a **piece of data**.

### Encapsulation
##### An object's methods act as an "interface" to the object's fields/attributes.
Only the class methods should interact the fields (the data) of the object. Thus, those methods "encapsulate" all the data/attributes in the class/objects.

### Inheritance
##### Allows new classes to reuse, extend, and modify the behavior of other classes.
Objects can take on properties of an existing object/class.

### Polymorphism
##### Accepts varied number and/or types of inputs.
Behavior can change based on the inputs.

### Abstraction
##### Arranges the complexity of a system.
Only relevant data is shown to the user and unnecessary details are hidden.

---

## Types of Languages

### Aspects of a Language
+ **Syntax**: the arrangement of characters
+ **Semantics**: the meaning behind that arrangement
+ **Libraries**: a body of pre-existing code; used for common functionality
+ **Tools**: any sort of program used to develop software (e.g. text editor, IDE, compiler, interpreter, etc)

### Level
##### High-Level vs Low-Level
+ **High-Level**: expressiveness, portability
+ **Low-Level**: efficiency, precise control

### Paradigms
##### Imperative vs Functional
+ **Imperative**: does modify state (most code is imperative)
+ **Functional**: does not modify state (mathematical functions; usually used in subsections of imperative code)

##### Procedural vs Object-Oriented
+ **Procedural**: action, then data
+ **Object-Oriented**: data, then action

### Execution
##### Compiled vs Interpreted
+ **Compiled**: source code is turned into another form of code (usually machine code) by a compiler  
+ **Interpreted**: source code is turned into action by an interpreter

### Typing
##### Dynamic vs Static
+ **Dynamic**: types of variables, parameters, or functions are declared
+ **Static**: types of variables, parameters, or functions are **not** declared

##### Strong vs Weak
+ **Strong**: explicit conversion of type is require
+ **Weak**: types can be coerced to other types

### Memory Management
##### Automatic vs Manual Allocation

### Examples

| Language        | Paradigm      | Execution                   | Typing            | Memory Management |
| --------------- | ------------- | --------------------------- | ----------------- | ----------------- |
| **JavaScript**  | imperative OO | interpreted                 | dynamic & weak    | automatic         |
| **PHP**         | imperative OO | interpreted                 | dynamic & weak    | automatic         |
| **Python**      | imperative OO | interpreted                 | dynamic & strong  | automatic         |
| **Ruby**        | imperative OO | interpreted                 | dynamic & strong  | automatic         |
| **Java**        | imperative OO | compiled (to Java bytecode) | static & strong   | automatic         |
| **C#**          | imperative OO | compiled                    | static & strong   | automatic         |
| **C++**         | imperative OO | compiled                    | static & weak     | manual            |
