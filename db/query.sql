SELECT userteetime.id, user.user_name, userteetime.teetime_id, userteetime.course_name AS course, userteetime.handicap, userteetime.date, userteetime.time
FROM userteetime
JOIN user ON userteetime.user_id = user.id
ORDER BY userteetime.teetime_id ASC;