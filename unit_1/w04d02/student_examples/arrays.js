const iceCreams = ['Vanilla', 'Chocolate', 'Straweberry', 'Butter Pecan']


const updatedIceCreams = iceCreams.map((iceCreams)=>{
    return iceCreams + ' Ice Cream'
})

// console.log(updatedIceCreams)


const allIceCreams = iceCreams.reduce((acc, iceCream )=>{
    return acc + iceCream + ','
},
'')

console.log(allIceCreams);

// '' =====> '' + 'Vanilla' + ',' ====> Vanilla,

// 'Vanilla,' ======> 'Vanilla,' + 'Chocolate' + ',' =====> Vanilla,Chocolate,


const iceCreamObject = IceCreams.reduce((acc, IceCream) => {
    acc[IceCream] = true;
    return acc
},
{})

console.log(IceCreamObject);