const mapDBToModel = ({ 
    id,
    username,
    password,
    fullname,
}) => ({
    id,
    username,
    password,
    fullname,
});

module.exports = { mapDBToModel };