var total = 0;

for(index = 2; index < process.argv.length; index++)
{
	total += Number(process.argv[index]);
}
console.log(total);
