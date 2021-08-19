<template>
  <div class="app-container">
    <el-card :body-style="{ padding: '0px', marginBottom: '1px'}" shadow="never" style="border: none">
      <el-row>
        <el-col :span="5" style="margin-left: 8%;margin-top: 2%">
          <img src="../../assets/image/kitchen.png" class="image" style=""/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span class="location">厨房</span>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" class="button" @click="inKitchen">相关信息查看</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="5" style="margin-left: 2%;margin-top: 2%">
          <img src="../../assets/image/bedroom.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span class="location">卧室</span>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" class="button" @click="inBedroom">相关信息查看</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="5" style="margin-left: 2%;margin-top: 2%">
          <img src="../../assets/image/living_room.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span class="location">客厅</span>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" class="button">相关信息查看</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="5" style="margin-left: 2%;margin-top: 2%">
          <img src="../../assets/image/toilet.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span class="location">洗漱间</span>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" class="button">相关信息查看</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px', marginBottom: '1px'}" shadow="never" style="border: none">
      <el-row>
        <el-col :span="3" style="margin-top: 5%;margin-left: 10%">
          <img src="../../assets/image/height.png" class="image" style=""/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span style="margin-left: 12%">体动</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 20%;">{{List.moveTime}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img src="../../assets/image/walk.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span>人体动向</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 10%;">{{List.moveTrend}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img src="../../assets/image/slow.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span>动作状态</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 10%;">{{List.moveStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img src="../../assets/image/fall.png" class="image"/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span>跌倒状态</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 20%">{{List.fallStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img src="../../assets/image/worning.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span>静止驻留警告</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img src="../../assets/image/trace.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span style="margin-left: 5%">轨迹检测</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px', marginBottom: '1px'}" shadow="never" style="border: none">
      <el-row>
        <el-col :span="3" style="margin-top: 5%;margin-left: 10%">
          <img @click="drawer = true" src="../../assets/image/signal.png" class="image" style=""/>
          <div style="padding: 14px;">
            <div class="bottom card-header">
              <span style="margin-left: 4%">灵敏度</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 20%;"></span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img @click="recent_distance_drawer = true" src="../../assets/image/distance.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span>最近检测距离</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 10%;">{{List.moveTrend}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img @click="farthest_distance_drawer = true" src="../../assets/image/distance.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span>最远检测距离</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 10%;">{{List.moveStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img @click="target_confirmation_time = true" src="../../assets/image/delay.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span>目标确认时间</span>
            </div>
            <div class="bottom card-header" style="margin-top: 10%">
              <span style="margin-left: 20%">{{List.fallStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img @click="target_disappearance_delay = true" src="../../assets/image/delay.png" class="image"/>
          <div style="padding-top: 14px;">
            <div class="bottom card-header">
              <span>目标消失延迟</span>
            </div>
          </div>
        </el-col>
        <el-col :span="3" style="margin-left: 2%;margin-top: 5%">
          <img @click="light_sensitive = true" src="../../assets/image/light.png" class="image"/>
          <div style="padding-top: 14px;padding-left: 20px">
            <div class="bottom card-header">
              <span style="margin-left: 5%">光感</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-drawer
      title="选择灵敏度"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="10"
          :min="1"
          :step="0.5">
        </el-slider>
      </div>
    </el-drawer>
    <el-drawer
      title="选择最近检测距离"
      :visible.sync="recent_distance_drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="10"
          :min="0"
          :step="0.1">
        </el-slider>
      </div>
    </el-drawer>
    <el-drawer
      title="选择最远检测距离"
      :visible.sync="farthest_distance_drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="10"
          :min="0"
          :step="0.1">
        </el-slider>
      </div>
    </el-drawer>
    <el-drawer
      title="选择目标确认时间"
      :visible.sync="target_confirmation_time"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="10"
          :min="0"
          :step="0.1">
        </el-slider>
      </div>
    </el-drawer>
    <el-drawer
      title="选择目标消失延迟"
      :visible.sync="target_disappearance_delay"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="10"
          :min="0"
          :step="0.1">
        </el-slider>
      </div>
    </el-drawer>
    <el-drawer
      title="选择光感"
      :visible.sync="light_sensitive"
      :direction="direction"
      :before-close="handleClose">
      <div class="block" style="width: 80%;margin-left: 10%">
        <el-slider
          v-model="value"
          show-input
          :max="1000"
          :min="0"
          :step="50">
        </el-slider>
      </div>
    </el-drawer>
<!--    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">-->
<!--      点我打开-->
<!--    </el-button>-->
  </div>
</template>
<style>
.image {
  width: 60%;
  display: block;
}
.bottom {
  margin-top: 5px;
  line-height: 12px;
}

.button {
  padding: 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('equipment', ['title', 'List'])
  },
  data() {
    return {
      listLoading: false,
      fits: ['fill'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      loading: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      drawer: false,
      recent_distance_drawer: false,
      farthest_distance_drawer: false,
      target_confirmation_time: false,
      target_disappearance_delay: false,
      light_sensitive: false,
      direction: 'btt',
      value: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('equipment', ['fetchData', 'inKitchen', 'inBedroom']),
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
