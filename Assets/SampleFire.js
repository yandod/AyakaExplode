#pragma strict

function OnCollisionEnter(other:Collision) {
	gameObject.SendMessage("Explode");	
}