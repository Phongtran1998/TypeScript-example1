import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map', 0, 0);
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
