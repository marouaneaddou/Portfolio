import {Problem} from "../types"
import { Code , Eye , Github} from 'lucide-react';

const problems: Problem[] = [
    {
      id: 1,
      title: 'Find the First Node of Loop in Linked List',
      difficulty: 'Easy',
      description: 'Given the head of a singly linked list, return the first node of the loop if a loop exists; otherwise, return null.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Find_the_first_node_of_loop_in_linked_list',
    },
    {
      id: 2,
      title: 'Palindrome Sentence',
      difficulty: 'Easy',
      description: 'Given a string s, check if it is a palindrome sentence or not. A palindrome sentence reads the same backward as forward, ignoring spaces and punctuation.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Palindrome_Sentence',
    },
    {
      id: 3,
      title: 'Search in a Row-Column Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a 2D matrix where each row and column is sorted in increasing order, determine whether a given number x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_Row_Column_sorted_matrix',
    },
    {
      id: 4,
      title: 'Search in a Row-Wise Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a row-wise sorted 2D matrix and an integer x, determine whether x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_row_wise_sorted_matrix',
    },
    {
      id: 5,
      title: 'Search in a Sorted Matrix',
      difficulty: 'Medium',
      description: 'Given a strictly sorted 2D matrix (each row is sorted in increasing order, and the first element of each row is greater than the last element of the previous row), determine whether a given number x is present in the matrix.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/Search_in_a_sorted_Matrix',
    },
    {
      id: 6,
      title: 'SheetCodeforces',
      difficulty: 'Medium',
      description: 'A collection of Codeforces problems categorized by topics and difficulty levels for practice.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/SheetCodeforces',
    },
    {
      id: 7,
      title: 'Anagram',
      difficulty: 'Easy',
      description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/anagram',
    },
    {
      id: 8,
      title: 'Apply Operations to an Array',
      difficulty: 'Easy',
      description: 'Given an array of non-negative integers, apply a series of operations to modify the array as per the problem statement.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/apply_Operations_to_an_Array',
    },
    {
      id: 9,
      title: 'Count and Say',
      difficulty: 'Medium',
      description: 'Given an integer n, generate the nth term of the count-and-say sequence.',
      leetCodeUrl: '',
      githubSolutionUrl: 'https://github.com/marouaneaddou/coding-challenge/tree/main/count_and_Say',
    },
    {
        id: 9,
        title: "divide Array Into Equal Pairs",
        difficulty: "Easy",
        description: "Given an array of integers, check if the array can be divided into pairs where each pair consists of two numbers with the same sum.",
        leetCodeUrl: "https://leetcode.com/problems/divide-array-into-equal-pairs/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/divide_Array_Into_Equal_Pairs",
      },
      {
        id: 10,
        title: "find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        description: "Find the first and last position of an element in a sorted array. If the element is not found, return [-1, -1].",
        leetCodeUrl: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_First_and_Last_Position_of_Element_in_Sorted_Array",
      },
      {
        id: 11,
        title: "find Lucky Integer in an Array",
        difficulty: "Easy",
        description: "Find the lucky integer in the array. A lucky integer is an integer that appears in the array exactly as many times as its value.",
        leetCodeUrl: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_Lucky_Integer_in_an_Array",
      },
      {
        id: 12,
        title: "find Missing and Repeated Values",
        difficulty: "Medium",
        description: "Given an array containing `n` numbers where the numbers are from 1 to n, find the repeated and missing number.",
        leetCodeUrl: "https://leetcode.com/problems/find-the-duplicate-number/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_Missing_and_Repeated_Values",
      },
      {
        id: 13,
        title: "find the Peaks",
        difficulty: "Easy",
        description: "Given an array, find all the 'peak' elements. A peak element is greater than or equal to its neighbors.",
        leetCodeUrl: "https://leetcode.com/problems/find-peak-element/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/find_the_Peaks",
      },
      {
        id: 14,
        title: "implement Atoi",
        difficulty: "Medium",
        description: "Implement the `atoi` function that converts a string to an integer, handling leading whitespaces, signs, and invalid characters.",
        leetCodeUrl: "https://leetcode.com/problems/string-to-integer-atoi/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/implement_Atoi",
      },
      {
        id: 15,
        title: "maximum Ascending Subarray Sum",
        difficulty: "Easy",
        description: "Given an array of integers, find the sum of the maximum ascending subarray.",
        leetCodeUrl: "https://leetcode.com/problems/maximum-ascending-subarray-sum/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/maximum_Ascending_Subarray_Sum",
      },
      {
        id: 16,
        title: "merge Two 2D Arrays by Summing Values",
        difficulty: "Medium",
        description: "Merge two 2D arrays by summing corresponding elements of both arrays.",
        leetCodeUrl: "https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/merge_Two_2D_Arrays_by_Summing_Values",
      },
      {
        id: 17,
        title: "minimum Recolors to Get K Consecutive Black Blocks",
        difficulty: "Medium",
        description: "A problem about finding the minimum number of recolors to obtain a set of consecutive black blocks.",
        leetCodeUrl: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/minimum_Recolors_to_Get_K_Consecutive_Black_Blocks"
    },
    {
        id: 18,
        title: "nonRepeatingCharacter",
        difficulty: "Easy",
        description: "A problem that asks to find the first non-repeating character in a string.",
        leetCodeUrl: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/non_Repeating_Character"
    },
    {
        id: 19,
        title: "number of occurrence",
        difficulty: "Easy",
        description: "A problem where we need to find the number of occurrences of each element in an array.",
        leetCodeUrl: "https://leetcode.com/problems/number-of-occurrences/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/number_of_occurrence"
    },
    {
        id: 20,
        title: "palindrome Number",
        difficulty: "Easy",
        description: "A problem to determine whether a given number is a palindrome.",
        leetCodeUrl: "https://leetcode.com/problems/palindrome-number/",
        githubSolutionUrl: "https://github.com/marouaneaddou/coding-challenge/tree/main/palindrome_Number"
    },
    {
        "id": 27,
        "title": "reverse an Array",
        "difficulty": "Easy",
        "description": "Reverse an array.",
        "leetCodeUrl": "https://leetcode.com/problems/reverse-an-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/reverse_an_Array"
    },
    {
        "id": 28,
        "title": "search in Rotated Sorted Array",
        "difficulty": "Medium",
        "description": "Search for a target value in a rotated sorted array.",
        "leetCodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/search_in_Rotated_Sorted_Array"
    },
    {
        "id": 29,
        "title": "sortColors",
        "difficulty": "Medium",
        "description": "Sort an array of colors represented by 0, 1, and 2.",
        "leetCodeUrl": "https://leetcode.com/problems/sort-colors/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/sort_Colors"
    },
    {
        "id": 30,
        "title": "squares of a Sorted Array",
        "difficulty": "Easy",
        "description": "Return an array of squares of a sorted array.",
        "leetCodeUrl": "https://leetcode.com/problems/squares-of-a-sorted-array/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/squares_of_a_Sorted_Array"
    },
    {
        "id": 31,
        "title": "valid Palindrome",
        "difficulty": "Easy",
        "description": "Check if a string is a valid palindrome.",
        "leetCodeUrl": "https://leetcode.com/problems/valid-palindrome/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/valid_Palindrome"
    },
    {
        "id": 31,
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "description": "Check if a string of parentheses is valid (balanced).",
        "leetCodeUrl": "https://leetcode.com/problems/valid-parentheses/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/valid_Palindrome"
    },
    {
        "id": 32,
        "title": "Merge Two Sorted Lists",
        "difficulty": "Easy",
        "description": "Merge two sorted linked lists into one sorted linked list.",
        "leetCodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/merge_two_Sorted_Lists"
    },
    {
        "id": 33,
        "title": "Maximum Subarray",
        "difficulty": "Easy",
        "description": "Find the contiguous subarray within an array that has the largest sum.",
        "leetCodeUrl": "https://leetcode.com/problems/maximum-subarray/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/maximum_Subarray"
    },
    {
        "id": 34,
        "title": "Invert Binary Tree",
        "difficulty": "Easy",
        "description": "Invert a binary tree (flip left and right subtrees).",
        "leetCodeUrl": "https://leetcode.com/problems/invert-binary-tree/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/invert_Binary_Tree"
    },
    {
        "id": 35,
        "title": "Two Sum",
        "difficulty": "Easy",
        "description": "Find two numbers in an array that add up to a specific target.",
        "leetCodeUrl": "https://leetcode.com/problems/two-sum/",
        "githubSolutionUrl": "https://github.com/marouaneaddou/coding-challenge/tree/main/twoSum"
    }
  ];

const getBgColor = (difficulty:string) => {
    if (difficulty === 'Easy') return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (difficulty === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    if (difficulty === 'Hard') return 'text-red-400 bg-red-400/10 border-red-400/20 ';
    return ''
};

const BlogPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" grid gap-4 grid-cols-1 max-w-2xl   mx-auto pb-6 ">
                    <div className="text-white text-2xl font-bold">
                        Coding Challenege
                    </div>
                    {problems.map((problem) => (
                        <div key={problem.id} className="border border-white/10 rounded-md p-5 mb-0 bg-white bg-opacity-10 backdrop-blur-[10px]">
                            <span className="text-white mb-4 inline-block">
                                <Code className="mr-2 inline"/> <span>{problem.title}</span>
                                <span className={`ml-1 p-2 rounded-md ${getBgColor(problem.difficulty)}`}>{problem.difficulty}</span>
                            </span>
                            <p className="text-white/70">{problem.description}</p>
                            <div className="md:flex mt-3">
                                <a href={problem.leetCodeUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" mb-3 md:mb-0 md:mr-2 bg-orange-yellow flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>View on LeetCode</span>
                                    <Eye className=" ml-1"/>
                                </a>
                                <a href={problem.githubSolutionUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="  text-white flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>GitHub Solution</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPage