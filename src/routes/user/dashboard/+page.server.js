import { goto } from '$app/navigation';
import { user } from '../../../stores/store';

export function load() {
	console.log(user);
}
