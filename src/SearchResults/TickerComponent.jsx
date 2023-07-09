function JobComponent({data}){
    return(
        <div className="DropDownItem">
            <h1>{data.name + ": $" + parseFloat(data.data.data.price).toFixed(2)}</h1>
        </div>
    )
}
export default JobComponent;