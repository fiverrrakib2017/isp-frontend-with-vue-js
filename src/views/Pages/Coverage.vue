<template>
    
    <div class="container">
        <!-- Search Input Section -->
        <div class="row mt-5">
            <div class="col-md-4 m-auto">
                <div class="card shadow">
                    <div class="card-body">
                        <input type="text" class="form-control" id="coverageInput" placeholder="Enter Coverage Area">
                    </div>
                    <div class="card-footer" id="offer-card-footer">
                        <button class="btn btn-primary" onclick="searchAreas()">Search</button>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Area Cards Section -->
        <div class="row mt-4" id="areaCardsRow">
            <!-- Area cards will be dynamically added here -->
        </div>
    </div>
</template>