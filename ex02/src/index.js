// Only change code below this line
function* myGenerator() {
    yield insideGenerator1();
    yield insideGenerator2();
    yield insideGenerator3();
}

function *insideGenerator1()
{
    for(let i=1; i < - 5; i++)
    {
        var x = [];
        x= x + i;
        console.log(x);
        yield x;
    }
    return x;
} 

const test = insideGenerator1();
for(let i=0; i<test; i++)
{
    array = test.next();
}

// Only change code above this line
module.exports = { fifteenArray, myGenerator };