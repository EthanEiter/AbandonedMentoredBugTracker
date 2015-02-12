/*
From https://bugzilla.mozilla.org/show_bug.cgi?id=1128878, the instructions from Josh Matthews:
It's common to find mentored bugs that have been assigned to a contributor weeks or months ago, 
with no subsequent followup from the assignee. This is currently handled on an ad-hoc basis; I propose 
writing a tool that will perform the following steps: 
*/

console.log("Hello, world!");
console.log("Steps Left to complete:");

// * find the set of mentored bugs with an assignee where the last modified date is >3 weeks
console.log("1.) Get all abandoned bugs.");
console.log("    For each bug,");

// * Set the assignee back to default (nobody@mozilla.org)
console.log("2.) Set the assignee to default.");


// * Request needinfo? from the previous assignee
console.log("3.) Request needinfo? from the previous assignee.");


// * Leave a comment like "I have reset the assignee as part of an automated cleanup since there has 
//   been no visible activity in this bug for some time. If this is incorrect, please leave a comment 
//   to let me know and I'll correct the error."
console.log('4.) Leave a comment explaining what has been done, and what is needed.');
