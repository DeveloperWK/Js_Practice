var num_01, num_02, sum_01, sum_02, sum_03, sum_04, sum_05;

num_01 = prompt("Enter Your 1st Number: ");
num_02 = prompt("Enter Your last Number: ");
num_01 = parseInt(num_01, 10);
num_02 = parseInt(num_02, 10);
sum_01 = num_01 + num_02;
sum_02 = num_01 - num_02;
sum_03 = num_01 * num_02;
sum_04 = num_01 % num_02;
sum_05 = num_01 / num_02;
document.write("Your 1st Number is = " + num_01 + "<br>");
document.write("Your last Number is = " + num_02 + "<br>");
document.write(num_01 + "+" + num_02 + "=" + sum_01 + "<br>");
document.write(num_01 + "-" + num_02 + "=" + sum_02 + "<br>");
document.write(num_01 + "x" + num_02 + "=" + sum_03 + "<br>");
document.write(num_01 + "%" + num_02 + "=" + sum_04 + "<br>");
document.write(num_01 + "/" + num_02 + "=" + sum_05 + "<br>");
