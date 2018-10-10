// this module is communicationg with other servers


var octokit = require('@octokit/rest')();


function get_data (req, res) {
    /**
     * receiving a querry from the user and forwarding it to GitHubs API using octokit library
     * the keyword can be anything
     * sorted_by should be 'stars', 'forks', or 'updated'
     * order should be 'asc' for ascending of 'desc' for decending
    */
    var keyword = "",
        sort_by = "",
        order = "";

    //TODO: an if condition and a try-catch should be added
    
    try {
        if(!req.query.sort_by){
            console.log("Empty input for srt_by, the default value'updated' used instead")
            sort_by = 'updated';
        }else if(req.query.sort_by ==='stars'|| req.query.sort_by ==='forks'|| req.query.sort_by === 'updated'){
            sort_by = req.query.sort_by;
        }else{
            //TODO: this should be fixed
            console.log("Wrong input for srt_by, the default value'updated' used instead")
            sort_by = 'updated';
        }
    } catch (error) {
        //TODO: this should be fixed
        console.log("Wrong input for srt_by, the default value'updated' used instead")
        sort_by = 'updated';
    }
    try {
        if(!req.query.order){
            console.log("Empty input for order. The default value 'asc' used instead");
            order = 'asc';
        }else if(req.query.order ==='asc'|| req.query.order ==='desc'){
            order = req.query.order;
        }else{
             //TODO: this should be fixed
            console.log("Wrong input for order. The default value 'asc' used instead");
            order = 'asc';
        }
    } catch (error) {
        //TODO: this should be fixed
        console.log("Wrong input for order. The default value 'asc' used instead");
        order = 'asc';
    }
    keyword = req.query.keyword;
     
    //sending the query to search in GitHub for a specific keyword
    octokit.search.repos({
        q: keyword,
        sort: sort_by,
        order: order
      }).then(({ data, headers, status }) => {
        if (status == 200) {
            var repos = [];
            //Itterating in the received raw data to get the values we want
            data.items.forEach(function(element) {
                info = {
                    "name" : element.name,
                    "owner" : element.owner.login,
                    "description" : element.description,
                    "last_update" : element.updated_at,
                    "repo_url" : element.url,
                    "clone_url" : element.clone_url,
                }
            //adding the results to the repos array
            repos.push(info);
            });
            // sending the gathered data back
            res.send(repos)
        }
        else {
            console.log ("error with status: " + status);
            res.send ("error with status: " + status);
        }
    });
}

module.exports = {
    get_data : get_data
}

