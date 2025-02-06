# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Answers
Divide and Conquer Run Time:
1. If array has 0 or 1 elements, return 0 or arr[0] respectivly $\rightarrow$ 1
2. Split the array into thirds $\rightarrow$ 1
3. Add each third recursivly $\rightarrow$ T($\frac{n}{3}$)


$T(n) = 1, n\le 1$

$T(n) = 3T(\frac{n}{3})+1, n>1$ 



Solving we get: 

$T(n) = 3T(\frac{n}{3})+1 $

$T(n) = 3(3T(\frac{n}{9})+\frac{1}{3})+1$

$T(n) = 9T(\frac{n}{9})+2$

$T(n) = 27T(\frac{n}{9})+3$
$T(n)= ...$

$T(n)= 3^{i}T(\frac{n}{3^{i}})+i$

for $i=log_3n$:

$T(n) = 3^{log_3n}T(\frac{n}{3^{log_3n}})+{log_3n}$

$T(n) = n \cdot T(1) + log_3n$

$T(n) = n+log_3n \in \Theta(n)$


From this we get the final $\Theta$ complexity to be $\Theta(n)$.

## Sources
Aidan Newberry helped me get started with spliting the array into thirds and with handeling errors that occured whne the array was of size 0. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.