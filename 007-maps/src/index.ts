import { User } from './User';
import { CustomMap } from './CustomMap';
import { Company } from './Company';

const map = new CustomMap('map');
const user = new User();
const company = new Company();
map.addUserMarker(user);
map.addCompanyMarker(company);
