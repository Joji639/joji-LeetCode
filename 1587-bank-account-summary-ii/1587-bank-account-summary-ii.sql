-- Write your PostgreSQL query statement below
select u.name,sum(amount) as balance from users u inner join Transactions t
on u.account=t.account 
group by t.account ,u.name
having sum(amount) > 10000