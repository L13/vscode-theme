#!/bin/bash

set -o errexit;
set -o pipefail;
set -o nounset;
# set -o xtrace;

main () {

# Variables ____________________________________________________________________

local -r __dirname="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
local -r __filename="${__dirname}/$(basename "${BASH_SOURCE[0]}")";
local -r __basename="$(basename ${__filename} .sh)";
local -r __root="$(cd "$(dirname "${__dirname}")" && pwd)";

local -a args=($@);
local value;
local -r git_dirname=${dirname// /[[:space:]]};

# Imports ______________________________________________________________________

source "${__dirname}/lib/rary.sh";

# Functions ____________________________________________________________________

function yes {
	
	echo 'yes';
	
	return 0;
	
}

function no {
	
	echo 'no';
	
	return 1;
	
}

# Initialize ___________________________________________________________________

echo "__dirname ${__dirname}";
echo "__filename ${__filename}";
echo "__basename ${__basename}";
echo "__root ${__root}";

msg_log 'test array_index';
value=$(array_index args[@] '-p');
msg_log "index ${value}";

msg_log 'test 1';

yes && msg_log 'test 1.1';
no && msg_log 'test 1.2';

msg_log 'test 2';

if ( yes ); then
	msg_log 'test 2.1';
fi

if ( ! no ); then
	msg_log 'test 2.2';
fi

msg_log 'test 3';

if [[ "$(echo "$(yes;echo $?)" | tail -n 1)" -eq 0 ]]; then
	msg_log 'test 3.1';
fi

if [[ "$(echo "$(no;echo $?)" | tail -n 1)" -gt 0 ]]; then
	msg_log 'test 3.2';
fi

msg_log 'test 3';
value="$(yes;echo $?)";
msg_log "${value##*$'\n'}";
msg_log 'test 3.1';
value="$(no;echo $?)";
msg_log "${value##*$'\n'}";
msg_log 'test 3.2';

value='aaa';

function main2 {
	
	echo 'bbb';
	local value='ccc';
	
	function test_fn {
		
		echo "${value}";
		
	}
	
	test_fn;
	
};main2 $@;

test_fn;

# ______________________________________________________________________________
exit 0;};main "$@";