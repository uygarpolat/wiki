alter table public.articles
alter column reading_minutes set default 2;

update public.articles
set reading_minutes = 2
where reading_minutes = 3;
