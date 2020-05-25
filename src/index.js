import './stylessheets/normalize.css';
import './stylessheets/main.css';
import renderCategory from './javascript/category';
import renderStorage from './javascript/storage';
import renderCluster from './javascript/cluster';

// render category vis
renderCategory('category_vis');

// render storage vis
renderStorage('hdfs_vis', 'HDFS', 66, 34, '#027825');
renderStorage('rdbm_vis', 'Rdbms', 52, 48, '#006DD6');
renderStorage('rdies_vis', 'Rdies', 34, 66, '#238681');
// render cluster vis
renderCluster('cluster_vis');




