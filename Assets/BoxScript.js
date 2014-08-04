
function Start () {

}

function Update () {

	//this.GetComponent('Detonator').Explode();
	if (Input.GetKeyDown(KeyCode.Space)) {
	var script = gameObject.GetComponent('Detonator');
	script.Explode();
	}
	
	if (transform.position.y < -30) {
		rigidbody.velocity = Vector3.zero;
		transform.rotation = Quaternion.identity;
		transform.position = new Vector3(0,5,0);
	}
}

function OnCollisionEnter(other:Collision) {

	if (other.gameObject.tag == 'safe') {
		return;
	}
	//var script = gameObject.GetComponent('Detonator');
	//script.Explode();

}