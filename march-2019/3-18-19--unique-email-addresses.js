/*
Unique Email Addresses

Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

Note:

1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.
*/

// Done on whiteboard first

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var hash = {};
  var count = 0;

  if (!emails.length) {
    return count;
  }
  
  for (var index = 0; emails.length > index; index += 1) {
    var segments = emails[index].split('@');
    var name = segments[0].split('+')[0].replace(/\./g, '');
    var key = name + segments[1];
    
    if (!hash[key]) {
      count += 1;
      hash[key] = true;
    }
  }

  return count;
};

const input1 = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
];
const input2 = ['test.1@ex.com', 'test.1@ex.com'];

const test1 = numUniqueEmails(input1);
const test2 = numUniqueEmails(input2);

console.log({ expect: 2, actual: test1, pass: test1 === 2 });
console.log({ expect: 1, actual: test2, pass: test2 === 1 });
