drop table if exists econ_indct_m;
create table econ_indct_m(id text, title text, description text, primary key (id));

drop table if exists econ_indct_l;
create table econ_indct_l(id text, date text, rate double precision, primary key (id, date));