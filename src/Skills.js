{
  this.skills.map((data, index) => (
    <div key={index} className="col-6">
      <p className="list-item">
        <FontAwesomeIcon icon={faCheckCircle} color="green" />
        <span className="ml-3">{data.name}</span>
      </p>
    </div>
  ))
}