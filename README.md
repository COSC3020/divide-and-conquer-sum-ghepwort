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
4. Merge each third together $\rightarrow$ n


$\begin{equation}
 T(n) =
   \left\{\begin{array}{lr}
       1, &  n \le 1\\
       3T(\frac{n}{3})+n, & n > 1 
    \end{array}\right.
 \end{equation}$

Solving we get: 

$\begin{equation}
  \begin{aligned}
    T(n) & = 3T(\frac{n}{3})+n\\
         & = 3(3T(\frac{n}{9})+\frac{n}{3})+n\\
         & = 9T(\frac{n}{9})+2n \\
         & = 27T(\frac{n}{9})+3n\\
         & = ... \\
         & = 3^{i}T(\frac{n}{3^{i}})+i\cdot n
  \end{aligned}
\end{equation}$

for $i=log_3n$:

$\begin{equation}
  \begin{aligned}
    T(n) & = 3^{log_3n}T(\frac{n}{3^{log_3n}})+{log_3n} \cdot n\\
         & = n \cdot T(1) + n \cdot log_3n\\
         & = n+n \cdot log_3n \in \Theta(n \cdot log(n))
  \end{aligned}
\end{equation}$

From this we get the final $\Theta$ complexity to be $\Theta(n \cdot log(n))$.

## Sources
Username "izmirlig' on [Redditt](https://www.reddit.com/r/rprogramming/comments/zm7y59/how_to_write_piecewise_function_notation_in_r/) helped me formate the LaTeX for equation 1 so it would be easy to read.

Username "Alessandro Cuttin" on [Stack Overflow](https://stackoverflow.com/questions/2860145/how-can-i-have-linebreaks-in-my-long-latex-equations) helped me formate the LaTeX for equations 2 and 3 so they would be easy to read.

Aidan Newberry helped me get started with spliting the array into thirds and with handeling errors that occured whne the array was of size 0.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.